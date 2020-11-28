import Login from './login';
import Home from './home';
import Diary from './diary';
import Users from './users';
import Admire from './admire';
import Centence from './centence';
import Chatting from './chatting';
import Collection from './collection';
import Little from './little';
import Memory from './memory';
import Punch from './punch';
import Tree from './tree';

const routes=[
    {
        path:'/',
        exact:true,
        component:Login
    },
    {
        path:'/home',
        component:Home,
        routes:[
            {
                path:'/home/diary',
                component:Diary,
            },
            {
                path:'/home/admire',
                component:Admire,
            },
            {
                path:'/home/centence',
                component:Centence,
            },
            {
                path:'/home/chatting',
                component:Chatting,
            },
            {
                path:'/home/collection',
                component:Collection,
            },
            {
                path:'/home/little',
                component:Little,
            },
            {
                path:'/home/memory',
                component:Memory,
            },
            {
                path:'/home/punch',
                component:Punch,
            },
            {
                path:'/home/tree',
                component:Tree,
            },
            {
                path:'/home/users',
                component:Users,
            },

        ]
    }
]

export default routes;