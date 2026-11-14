-- Adressen einfügen
INSERT INTO address (street, house_number, postal_code, latitude, longitude) VALUES
('Willi-Pohlmann-Platz', '1', '44623', 51.538747, 7.224692),
('Friedrich-Ebert-Platz', '2', '44623', 51.536228, 7.224543),
('Europaplatz', '1', '44623', 51.540020, 7.220450),
('Am Revierpark', '40', '44627', 51.542650, 7.259420),
('Hospitalstraße', '19-21', '44649', 51.532056, 7.200808);

-- Einrichtungen einfügen
INSERT INTO facility (name, description, address_id) VALUES
('Stadtbibliothek Herne', 'Öffentliche Bibliothek', 1),
('Rathaus Herne', 'Verwaltung der Stadt Herne', 2),
('LWL-Museum für Archäologie', 'Archäologisches Landesmuseum', 3),
('Revierpark Gysenberg', 'Freizeitpark mit Schwimmbad', 4),
('St. Anna Hospital', 'Krankenhaus', 5);