var feature_db = [["parking", "free_parking", "Free Parking"],
                  ["airco", "air_conditioning", "Air Conditioning"],
                  ["24hr", "24_hour_front_desk", "24 Hour Reception"],
                  ["wifi", "free_wifi_internet_access_included", "Free WiFi"],
                  ["sauna", "sauna", "Sauna"]];
export var features_api = feature_db.map(e => [e[0],e[1]])
export var features_display = feature_db.map(e => [e[1],e[2]])
