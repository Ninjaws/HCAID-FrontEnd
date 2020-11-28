import tensorflow as tf
import tensorflowjs as tfjs

model = tf.keras.models.load_model('mushroom_predictor.h5')


tfjs.converters.save_keras_model(model, "tfmodel")



f = ord('f')
v = ord('v')
p = ord('p')
b = ord('b')
e = ord('e')
l = ord('l')
w = ord('w')

n = ord('n')
k = ord('k')



'''
Index(['class', 

       'spore-print-color_b', 'spore-print-color_h',
       'spore-print-color_k', 'spore-print-color_n', 'spore-print-color_o',
       'spore-print-color_r', 'spore-print-color_u', 'spore-print-color_w',       
       'spore-print-color_y', 
       
       'ring-type_e', 'ring-type_f', 'ring-type_l',
       'ring-type_n', 'ring-type_p', 
       
       'stalk-shape_e', 'stalk-shape_t',
       
       'gill-color_b', 'gill-color_e', 'gill-color_g', 'gill-color_h',
       'gill-color_k', 'gill-color_n', 'gill-color_o', 'gill-color_p',
       'gill-color_r', 'gill-color_u', 'gill-color_w', 'gill-color_y',
       
       'habitat_d', 'habitat_g', 'habitat_l', 'habitat_m', 'habitat_p',
       'habitat_u', 'habitat_w', 
       
       'population_a', 'population_c',
       'population_n', 'population_s', 'population_v', 'population_y',
              
       'bruises_f', 'bruises_t', 
              
       'odor_a', 'odor_c', 'odor_f', 'odor_l',
       'odor_m', 'odor_n', 'odor_p', 'odor_s', 'odor_y'],
      dtype='object')
'''


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

#print(model.predict(shroom))
