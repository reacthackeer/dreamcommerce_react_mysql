const adminAccountDashboard = [
    // first nav start
    {
        name: 'Product',
        links: ['add', 'edit', 'delete'],
        url: 'product',
        push: [true, false, false],
        id: 3,
        nav: 1,
    },   
    {
        name: 'Similar Product',
        links: ['add'],
        push: [false],
        url: 'similar-product',
        id: 35,
        nav: 1,
    },   
    {
        name: 'Edit Offer Product',
        links: ['edit'],
        push: [false],
        url: 'offer',
        id: 38,
        nav: 1,
    },  
    {
        name: 'Array Product',
        links: ['add'],
        url: 'array-product',
        push: [true],
        id: 1,
        nav: 1,
    },   
    {
        name: 'Object Product',
        links: ['add'],
        url: 'object-product',
        push: [true],
        id: 1,
        nav: 1,
    },
    {
        name: 'Collection',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'collection',
        id: 5,
        nav: 1
    },
    {
        name: 'Category',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'category',
        id: 6,
        nav: 1
    },
    {
        name: 'Top Category',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'top-category',
        id: 7,
        nav: 1
    },
    {
        name: 'Section',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'section',
        id: 8,
        nav: 1
    },
    {
        name: 'Top Section',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'top-section',
        id: 9, 
        nav: 1
    },

    // second nav start
    {
        name: 'Banner',
        url: 'banner',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        id: 1,
        nav: 2
    },
    {
        name: 'Popular Category',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'popular-category',
        id: 2,
        nav: 2
    },
    {
        name: 'Brand',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'brand',
        id: 4,
        nav: 2
    },
    {
        name: 'Collection',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'collection',
        id: 5,
        nav: 2
    },
    {
        name: 'Shop By Brand',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'shop-by-brand',
        id: 10,
        nav: 2
    },
    {
        name: 'Shop By Category',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'shop-by-category',
        id: 11,
        nav: 2
    },

    // third nav start
    {
        name: 'Shipping & Payment',
        links: ['edit'],
        push: [true],
        url: 'shipping-and-payment',
        id: 12,
        nav: 3
    },
    {
        name: 'Store Information',
        links: ['edit'],
        push: [true],
        url: 'store-information',
        id: 13,
        nav: 3
    },
    {
        name: 'Contact Us',
        links: ['edit'],
        push: [true],
        url: 'contact-us',
        id: 14,
        nav: 3
    },
    {
        name: 'Shipping Address',
        links: ['edit'],
        push: [true],
        url: 'shipping-address',
        id: 15,
        nav: 3
    },
    {
        name: 'Profile Image',
        links: ['edit'],
        push: [true],
        url: 'profile-image',
        id: 30,
        nav: 3
    },
    {
        name: 'Change Password',
        links: ['edit'],
        push: [true],
        url: 'change-password',
        id: 16,
        nav: 3
    },
    {
        name: 'Order Management',
        links: ['edit'],
        push: [true],
        url: 'reset-password',
        id: 17,
        nav: 3
    },

    // fourth nav start
    {
        name: 'Users',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'users',
        id: 18,
        nav: 4
    },
    {
        name: 'Store',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'store',
        id: 19,
        nav: 4
    },
    {
        name: 'Admin',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'admin',
        id: 20,
        nav: 4
    },
    {
        name: 'Sub Admin',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'sub-admin',
        nav: 4,
        id: 40
    },    {
        name: 'Sub Seller',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'sub-seller',
        id: 41,
        nav: 4
    },
    {
        name: 'Sub Moderator',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'sub-moderator',
        id: 42,
        nav: 4
    }, 
    {
        name: 'Courier',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'courier',
        id: 45,
        nav: 4
    },
    {
        name: 'Sub Courier',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'sub-courier',
        id: 46,
        nav: 4
    },
    {
        name: 'Product Editor',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'sub-courier',
        id: 47,
        nav: 4
    },
    {
        name: 'Order Editor',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'sub-courier',
        id: 48,
        nav: 4
    },
    {
        name: 'Seller',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'seller',
        id: 21,
        nav: 4
    },
    {
        name: 'Moderator',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'moderator',
        id: 22,
        nav: 4
    },
    {
        name: 'Delivery man',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'delivery-man',
        id: 23,
        nav: 4
    },
];

const adminPortal = [
    {
        name: 'Users',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'users',
        id: 18
    }, 
    {
        name: 'Admin',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'admin',
        id: 20
    },
    {
        name: 'Sub Admin',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'sub-admin',
        id: 20
    },
    {
        name: 'Seller',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'seller',
        id: 21
    },
    {
        name: 'Sub Seller',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'sub-seller',
        id: 41,
        nav: 4
    },
    {
        name: 'Moderator',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'moderator',
        id: 22
    },
    {
        name: 'Sub Moderator',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'sub-moderator',
        id: 42,
        nav: 4
    },  
    {
        name: 'Courier',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'courier',
        id: 45,
        nav: 4
    }, 
    {
        name: 'Delivery man',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'delivery-man',
        id: 23
    }
];

const coverPortal = [
    {
        name: 'Banner',
        url: 'banner',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        id: 1,
        nav: 2
    },
    {
        name: 'Popular Category',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'popular-category',
        id: 2,
        nav: 2
    },
    {
        name: 'Brand',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'brand',
        id: 4,
        nav: 2
    }, 
    {
        name: 'Shop By Brand',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'shop-by-brand',
        id: 10,
        nav: 2
    },
    {
        name: 'Shop By Category',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'shop-by-category',
        id: 11,
        nav: 2
    },
]

const productPortal = [
    {
        name: 'Product',
        links: ['add', 'edit', 'delete'],
        push: [true, false, false],
        url: 'product',
        id: 3,
        nav: 1,
    },    
    {
        name: 'Similar Product',
        push: [false],
        links: ['add'],
        url: 'similar-product',
        id: 35,
        nav: 1,
    },
    {
        name: 'Edit Offer Product',
        push: [false],
        links: ['edit'],
        url: 'offer',
        id: 38,
        nav: 1,
    },  
    {
        name: 'Array Product',
        links: ['add'],
        push: [true],
        url: 'array-product',
        id: 33,
        nav: 1,
    },   
    {
        name: 'Object Product',
        links: ['add'],
        push: [true],
        url: 'object-product',
        id: 34,
        nav: 1,
    },
    {
        name: 'Collection',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'collection',
        id: 5,
        nav: 1
    },
    {
        name: 'Category',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'category',
        id: 6,
        nav: 1
    },
    {
        name: 'Top Category',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'top-category',
        id: 7,
        nav: 1
    },
    {
        name: 'Section',
        links: ['add', 'edit', 'delete'],
        push: [true, true, true],
        url: 'section',
        id: 8,
        nav: 1
    }, 
]

const systemPortal = [
    {
        name: 'Shipping & Payment',
        links: ['edit'],
        push: [true],
        url: 'shipping-and-payment',
        id: 12,
        nav: 3
    },
    {
        name: 'Store Information',
        links: ['edit'],
        push: [true],
        url: 'store-information',
        id: 13,
        nav: 3
    },
    {
        name: 'Contact Us',
        links: ['edit'],
        push: [true],
        url: 'contact-us',
        id: 14,
        nav: 3
    },
    {
        name: 'Shipping Address',
        links: ['edit'],
        push: [true],
        url: 'shipping-address',
        id: 15,
        nav: 3
    },
    {
        name: 'Profile Image',
        links: ['edit'],
        push: [true],
        url: 'profile-image',
        id: 30,
        nav: 3
    },
    {
        name: 'Change Password',
        links: ['edit'],
        push: [true],
        url: 'change-password',
        id: 16,
        nav: 3
    },
    {
        name: 'Order Management',
        links: ['edit'],
        push: [true],
        url: 'reset-password',
        id: 17,
        nav: 3
    },
]
const getCurrentActions = (urlName) => {
    return adminAccountDashboard.filter((info)=> info.url === urlName)[0].links;
}

const getCurrentItem = (urlName) => {
    return adminAccountDashboard.filter((info)=> info.url === urlName)[0];
}

const getCurrentNav = (urlName) => {
    return adminAccountDashboard.filter((info)=> info.url === urlName)[0].nav;
}

export { adminAccountDashboard, adminPortal, coverPortal, getCurrentActions, getCurrentItem, getCurrentNav, productPortal, systemPortal };

