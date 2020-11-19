import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from tensorflow.keras.layers import Dense
from tensorflow.keras.models import Sequential
from tensorflow.keras.optimizers import Adam

'''
Big correlation:
1. Odor (f (foul) strong correlation with poisonous)
2. Bruises (f (no bruises) strong correlation with poisonous)
3. Population (v (several) strong correlation with poisonous, for the other types no correlation)
4. Habitat (p (paths) strong correlation with poisonous)
5. Gill-color (b (buff) extreme correlation with poisonous)
6. Stalk-shape (e (enlarging) rarely edible, t (tampering) rarely poisonous))
7. Ring type (p (pendant) very often edible, l (large) usually poisonous
8. Spore print color (w (white) and h (chocolate) strong correlation with poisonous, k (black) and n (brown) rarely poisonous)

Low correlation:
1. Cap Shape
2. Cap Color
3. Cap surface (f (flat) is usually not poisonous though)
4. Stalk Surface Below Ring
5. Stalk Surface Above Ring

Useless:
1. Veil-type (only 1 variable, everything is edible)
'''

dataset = pd.read_csv('mushrooms.csv')
dataset_selectedfeatures = dataset.filter(items=['class', 'odor', 'bruises', 'population', 'habitat', 'gill-color', 'stalk-shape', 'ring-type', 'spore-print-color'])
pd.set_option('display.max_columns', None)


def apply_onehotencoding_tocolumn(col_name):
    global dataset_selectedfeatures

    dataset_selectedfeatures = dataset_selectedfeatures.join(pd.get_dummies(dataset_selectedfeatures[col_name], col_name))
    dataset_selectedfeatures = dataset_selectedfeatures.drop(columns=[col_name])

amount_of_cols = len(dataset_selectedfeatures.columns)
for i in range(amount_of_cols-1, 0, -1):
    apply_onehotencoding_tocolumn(dataset_selectedfeatures.columns[i])


print(dataset_selectedfeatures.head())

dataset_selectedfeatures['class'] = dataset_selectedfeatures['class'].map({'e': 1, 'p': 0})
print(dataset_selectedfeatures.head())
print(dataset_selectedfeatures.columns)

X = dataset_selectedfeatures.drop('class', axis=1)
y = dataset_selectedfeatures['class']

X = np.array(X)
y = np.array(y)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = Sequential()
model.add(Dense(8, activation='relu', input_shape=(X.shape[1],)))
model.add(Dense(8, activation='relu'))
model.add(Dense(8, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

model.compile(loss='binary_crossentropy', optimizer=Adam(lr=0.00001), metrics='accuracy')
model.fit(X_train, y_train, batch_size=64, epochs=200, validation_split=0.2)

results = model.evaluate(X_test, y_test)
print(results)

#model.save('mushroom_predictor_2.h5')
