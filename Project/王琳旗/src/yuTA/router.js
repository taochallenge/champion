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
import DiaryChange from './diaryChange';
import AdmireUp from './admireUp';
import AdmireChange from './admireChange';
import CentenceUp from './centenceUp';
import CentenceChange from './centenceChange';
import ChattingUp from './chattingUp';
import ChattingChange from './chattingChange';
import CollectionUp from './collectionUp';
import CollectionChange from './collectionChange';
import LittleUp from './littleUp';
import LittleChange from './littleChange';
import MemoryUp from './memoryUp';
import MemoryChange from './memoryChange';
import PunchUp from './punchUp';
import PunchChange from './punchChange';
import TreeUp from './treeUp';
import TreeChange from './treeChange';
import UsersUp from './usersUp';
import UsersChange from './usersChange';

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
                    {
                        path:'/home/diary/diarychange',
                        component:DiaryChange,
                    }
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
                    {
                        path:'/home/admire/admirechange',
                        component:AdmireChange,
                    }
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
                    {
                        path:'/home/centence/centencechange',
                        component:CentenceChange,
                    }
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
                    {
                        path:'/home/chatting/chattingchange',
                        component:ChattingChange,
                    }
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
                    {
                        path:'/home/collection/collectionchange',
                        component:CollectionChange,
                    }
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
                    {
                        path:'/home/little/littlechange',
                        component:LittleChange,
                    }
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
                    {
                        path:'/home/memory/memorychange',
                        component:MemoryChange,
                    }
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
                    {
                        path:'/home/punch/punchchange',
                        component:PunchChange,
                    }
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
                    {
                        path:'/home/tree/treechange',
                        component:TreeChange,
                    }
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
                    {
                        path:'/home/diary/diarychange',
                        component:DiaryChange,
                    }
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
                    {
                        path:'/home/users/userschange',
                        component:UsersChange,
                    }
                ]
            },

        ]
    }
]

export default routes;