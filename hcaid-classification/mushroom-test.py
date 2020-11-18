import tensorflow as tf

model = tf.keras.models.load_model('mushroom_predictor.h5')


f = ord('f')
v = ord('v')
p = ord('p')
b = ord('b')
e = ord('e')
l = ord('l')
w = ord('w')

n = ord('n')
k = ord('k')


shroom = [[
    0, 0, 0, 0, 0, 0, 0, 1, 0,           # spore-print-color
    0, 0, 1, 0, 0,                       # ring-type
    1, 0,                                # stalk-shape
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  # gill-color
    0, 1, 0, 0, 0, 0, 0,                 # habitat
    0, 0, 0, 0, 1, 0,                    # population
    1, 0,                                # bruises
    0, 0, 1, 0, 0, 0, 0, 0, 0            # odor   # 0,0,1,0,0,0,0,0,0
]]
# [[f, f, v, p, b, e, l, w]]

print(model.predict(shroom))
