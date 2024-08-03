import json

# TXT dosyasını oku
with open('/mnt/data/README (1).txt', 'r') as file:
    lines = file.readlines()

# JSON formatı için veri listesi oluştur
data = []
for line in lines:
    precode, code = line.strip().split()
    data.append({"precode": precode, "code": code})

# JSON dosyasını oluştur ve kaydet
with open('/mnt/data/renault_codes.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)