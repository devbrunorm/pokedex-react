import csv
import json
import pandas as pd

ARQUIVO_CSV_ORIGINAL = 'pokemon.csv'
ARQUIVO_CSV_MODIFICADO = 'data.csv'
ARQUIVO_JSON = 'data.json'

csv_pokemon = pd.read_csv(ARQUIVO_CSV_ORIGINAL)
csv_pokemon['Image'] = 'images/' + csv_pokemon['Name'] + '.png'
csv_pokemon['Name'] = csv_pokemon['Name'].str.capitalize()
fieldnames = tuple(csv_pokemon.columns)
csv_pokemon.to_csv('data.csv', index= False, header=False)

csvfile = open(ARQUIVO_CSV_MODIFICADO, "r")
reader = csv.DictReader(csvfile, fieldnames)

jsonfile = open(ARQUIVO_JSON, "w")

jsonfile.write('{ "pokemon":')
jsonfile.write(json.dumps(list(reader)))
jsonfile.write('}')
jsonfile.close()