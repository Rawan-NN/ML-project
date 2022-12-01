import pandas as pd
import numpy as np
data = pd.read_csv("FakeNewsNet.csv")
print(data.head())
print(data.isnull().sum())
updated_df = data.dropna(axis=0)

from sklearn.preprocessing import LabelEncoder
labelencoder=LabelEncoder()
for i in updated_df:
    updated_df[i]=labelencoder.fit_transform(updated_df[i])

updated_df["real"] = updated_df["real"].map({0: "Not real", 1: "real"})
print(updated_df.tail())

from sklearn.model_selection import train_test_split
x = np.array(updated_df[["title", "news_url", "source_domain", "tweet_num"]])
y = np.array(updated_df[["real"]])

# print(x)

from sklearn.tree import DecisionTreeClassifier
xtrain, xtest, ytrain, ytest = train_test_split(x, y, test_size=0.10, random_state=42)
model = DecisionTreeClassifier()
model.fit(xtrain, ytrain)

features = np.array([[20854, 728,444, 7]])
print(model.predict(features))
print(model.score(xtest,ytest))
from sklearn import linear_model
logr = linear_model.LogisticRegression()
logr.fit(xtrain, ytrain)

#print(logr.score(xtest, ytest))

features = np.array([[20854, 728,444, 7]])
print(logr.predict(features))
print(logr.score(xtest,ytest))

from sklearn.neighbors import KNeighborsClassifier
 # create regressor object
regressor =KNeighborsClassifier(n_neighbors=7)
  
# fit the regressor with x and y data
regressor.fit(xtrain, ytrain)

#print(logr.score(xtest, ytest))

features = np.array([[20854, 728,444, 7]])
print(regressor.predict(features))
print(regressor.score(xtest,ytest))