import os
import json

# Define the directory containing the JSON files
i18n_directory = "i18n"

# Define the mapping of replacements
replacements = {
    "dbs": "dbs-beta",
    "life": "life-beta",
    "lead": "lead-beta"
}

def rename_keys(data):
    """Recursively replace specified keys in a JSON object."""
    if isinstance(data, dict):
        new_dict = {}
        for key, value in data.items():
            # Rename keys if they match the replacement dictionary
            new_key = replacements.get(key, key)
            new_dict[new_key] = rename_keys(value)
        return new_dict
    elif isinstance(data, list):
        return [rename_keys(item) for item in data]
    else:
        return data

# Process all JSON files in the i18n directory
for filename in os.listdir(i18n_directory):
    if filename.endswith(".json"):
        file_path = os.path.join(i18n_directory, filename)

        # Read JSON file
        with open(file_path, "r", encoding="utf-8") as file:
            data = json.load(file)

        # Modify the JSON data
        modified_data = rename_keys(data)

        # Write the modified JSON back to the file
        with open(file_path, "w", encoding="utf-8") as file:
            json.dump(modified_data, file, indent=4, ensure_ascii=False)

        print(f"Updated {filename}")

