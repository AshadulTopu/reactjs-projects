export const MenuData = [
    // {
    //     title: 'Home',
    //     url: '/',
    //     cName: 'nav-links'
    // }
    {
        label: 'Home',
        url: '/',
    },
    {
        label: 'About',
        url: '/about',
    },
    {
        label: 'Services',
        url: '/services',
        children: [
            {
                label: 'Service 1',
                url: '/service1',
                children: [
                    {
                        label: 'Service 1 details',
                        url: '/details',
                    }
                ]
            },
            {
                label: 'Service 2',
                url: '/service2',
                children: [
                    {
                        label: 'Service 2 details',
                        url: '/details',
                    }
                ]
            },
            {
                label: 'Service 3',
                url: '/service3',
                children: [
                    {
                        label: 'Service 3 details',
                        url: '/details',
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        url: '/contact',
    },
    {
        label: 'Account',
        url: '/account',
        children: [
            {
                label: 'Profile',
                url: '/profile',
                children: [
                    {
                        label: 'Edit Profile',
                        url: '/edit-profile',
                    }
                ]
            },
            {
                label: 'Settings',
                url: '/settings',
                children: [
                    {
                        label: 'Change Password',
                        url: '/change-password',
                    },
                    {
                        label: 'Change Email',
                        url: '/change-email',
                    },
                    {
                        label: 'Change Phone',
                        url: '/change-phone',
                    }
                ]
            },
            {
                label: 'Logout',
                url: '/logout',
            }
        ]
    }
    // {
    //     label: 'Login',
    //     url: '/login',
    // }

]