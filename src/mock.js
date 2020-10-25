export const categories = [
    {
        'id': 1,
        'slug': 'bebidas',
        'name': 'Bebidas',
        'items': [
            {'id': 1, 'name': "Pepsi", 'price': 70.00, 'featured': true},
            {'id': 2, 'name': "Paso de Los Toros", 'price': 60.00},
            {'id': 3, 'name': "7Up", 'price': 50.00}
        ]
    },
    {
        'id': 2,
        'slug': 'minutas',
        'name': 'Minutas',
        'items': [
            {'id': 4, 'name': "Milanga a la Napo", 'price': 270.00, 'featured': true},
            {'id': 5, 'name': "Milanga a Caballo", 'price': 260.00},
            {'id': 6, 'name': "Milanga 4 Quesos", 'price': 250.00}
        ]
    },
    {
        'id': 3,
        'slug': 'ensaladas',
        'name': 'Ensaladas',
        'items': [
            {'id': 7, 'name': "Ensalada César", 'price': 170.00, 'featured': true},
            {'id': 8, 'name': "Ensalada Mediterránea", 'price': 160.00},
            {'id': 9, 'name': "Ensalada TexMex", 'price': 150.00}
        ]
    },
    {
        'id': 4,
        'slug': 'postres',
        'name': 'Postres',
        'items': [
            {'id': 10, 'name': "Un flancito", 'price': 70.00, 'featured': true},
            {'id': 11, 'name': "Un Brownicito con Helado", 'price': 120.00},
            {'id': 12, 'name': "Un Budincito de Pan", 'price': 70.00}
        ]
    }
];

export const products = [
    {'id': 0, 'category_id': 0, 'name': "El producto 0", 'price': {'symbol': "$", 'amount': 0.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'description': 'Este producto si fuera una base de datos, no existira. Pero ésto no es una base de datos. Es un mock. Y existe.'},
    {'id': 1, 'category_id': "bebidas", 'name': "Pepsi", 'price': {'symbol': "$", 'amount': 70.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'featured': true, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 2, 'category_id': "bebidas", 'name': "Paso de Los Toros", 'price': {'symbol': "$", 'amount': 60.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 3, 'category_id': "bebidas", 'name': "7Up", 'price': {'symbol': "$", 'amount': 50.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 4, 'category_id': "minutas", 'name': "Milanga a la Napo", 'price': {'symbol': "$", 'amount': 70.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'featured': true, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 5, 'category_id': "minutas", 'name': "Milanga a Caballo", 'price': {'symbol': "$", 'amount': 60.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 6, 'category_id': "minutas", 'name': "Milanga 4 Quesos", 'price': {'symbol': "$", 'amount': 50.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 7, 'category_id': "ensaladas", 'name': "Ensalada César", 'price': {'symbol': "$", 'amount': 70.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'featured': true, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 8, 'category_id': "ensaladas", 'name': "Ensalada Mediterránea", 'price': {'symbol': "$", 'amount': 60.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 9, 'category_id': "ensaladas", 'name': "Ensalada TexMex", 'price': {'symbol': "$", 'amount': 50.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 10, 'category_id': "postres", 'name': "Un flancito", 'price': {'symbol': "$", 'amount': 70.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'featured': true, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 11, 'category_id': "postres", 'name': "Un Brownicito con Helado", 'price': {'symbol': "$", 'amount': 120.00}, 'image': {'src': 'https://placehold.it/750x300'}, 'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'},
    {'id': 12, 'category_id': "postres", 'name': "Un Budincito de Pan", 'price': {'symbol': "$", 'amount': 70.00}, 'image': {'src': 'https://placehold.it/750x300'},  'description': 'Descripción larga y tendida sobre las viscitudes de ser un producto y tener que venderse a un consumidor apelando a su sensbilidad sobre ciertas cualidades que el pueda encontrar interesantes.'}
]