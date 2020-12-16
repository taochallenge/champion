import Login from './login';
import Home from './home';
import Diary from './diary';
import Centence from './centence';
import Comment from './comment';
import Little from './little';
import Memory from './memory';
import Tree from './tree';
import Users from './users';
import DiaryUp from './diaryUp';
import CentenceUp from './centenceUp';
import CommentUp from './commentUp';
import LittleUp from './littleUp';
import MemoryUp from './memoryUp';
import TreeUp from './treeUp';
import UsersUp from './usersUp';

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
                routes:[
                    {
                        path:'/home/diary/diaryup',
                        component:DiaryUp,
                    },
                ]
            },
            {
                path:'/home/centence',
                component:Centence,
                routes:[
                    {
                        path:'/home/centence/centenceup',
                        component:CentenceUp,
                    },
                ]
            },
            {
                path:'/home/comment',
                component:Comment,
                routes:[
                    {
                        path:'/home/comment/commentup',
                        component:CommentUp,
                    },
                ]
            },
            {
                path:'/home/little',
                component:Little,
                routes:[
                    {
                        path:'/home/little/littleup',
                        component:LittleUp,
                    },
                ]
            },
            {
                path:'/home/memory',
                component:Memory,
                routes:[
                    {
                        path:'/home/memory/memoryup',
                        component:MemoryUp,
                    },
                ]
            },
            {
                path:'/home/tree',
                component:Tree,
                routes:[
                    {
                        path:'/home/tree/treeup',
                        component:TreeUp,
                    },
                ]
            },
            {
                path:'/home/diary',
                component:Diary,
                routes:[
                    {
                        path:'/home/diary/diaryup',
                        component:DiaryUp,
                    },
                ]
            },
            {
                path:'/home/users',
                component:Users,
                routes:[
                    {
                        path:'/home/users/usersup',
                        component:UsersUp,
                    },
                ]
            },

        ]
    }
]

export default routes;