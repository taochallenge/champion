import Login from './login';
import Home from './home';
import Diary from './diary';
import Admire from './admire';
import Centence from './centence';
import Chatting from './chatting';
import Collection from './collection';
import Little from './little';
import Memory from './memory';
import Punch from './punch';
import Tree from './tree';
import Users from './users';
import DiaryUp from './diaryUp';
import AdmireUp from './admireUp';
import CentenceUp from './centenceUp';
import ChattingUp from './chattingUp';
import CollectionUp from './collectionUp';
import LittleUp from './littleUp';
import MemoryUp from './memoryUp';
import PunchUp from './punchUp';
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
                path:'/home/admire',
                component:Admire,
                routes:[
                    {
                        path:'/home/admire/admireup',
                        component:AdmireUp,
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
                path:'/home/chatting',
                component:Chatting,
                routes:[
                    {
                        path:'/home/chatting/chattingup',
                        component:ChattingUp,
                    },
                ]
            },
            {
                path:'/home/collection',
                component:Collection,
                routes:[
                    {
                        path:'/home/collection/collectionup',
                        component:CollectionUp,
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
                path:'/home/punch',
                component:Punch,
                routes:[
                    {
                        path:'/home/punch/punchup',
                        component:PunchUp,
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