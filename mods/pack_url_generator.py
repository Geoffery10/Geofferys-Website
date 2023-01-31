import os

folder = '.\packs\minecraft\Yggdrasil_All_The_Mods_8'
prefix = 'https://www.geoffery10.com/mods/packs/minecraft/Yggdrasil_All_The_Mods_8/'
file_list = []

for filename in os.listdir(folder):
    file_list.append(prefix + filename)

print('"PACK_URLS": [')
for file in file_list:
    print(f"\"{file}\",")
print(']')
