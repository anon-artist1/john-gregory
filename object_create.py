import os
import json

directory = 'C:/Users/cgreg/OneDrive/Documents/PersonalProjects/copperstate-artist/src/assets/images'

def create_photo_json(img_dir, portfolio = True):
    photo_json = []

    for i, entry in enumerate(os.scandir(directory)):
        if (entry.path.endswith(".jpg") or entry.path.endswith(".png")) and entry.is_file():
            photo_json.append({"id": i, "src": "Img" + str(i)})

    print(photo_json)

def create_imports(img_dir):
    imports = ""

    for i, entry in enumerate(os.scandir(directory)):
        if (entry.path.endswith(".jpg") or entry.path.endswith(".png")) and entry.is_file():
            imports += "import Img" + str(i) + " from \"../assets/images/" + entry.path.split('/')[-1][7:] + "\" \n"

    print(imports)

if __name__ == "__main__":
    # create_imports(directory)
    create_photo_json(directory)