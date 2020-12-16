import Shequ from './shequ/Shequ'
import Tui from './shequ/Tui'
import Guan from './shequ/Guan';
import User from './shequ/User';
import Write from './shequ/Write';
import Zhong from './shequ/Zhong';
import Shou from './shequ/Shou';
import Xian from './shequ/Xian';
import Details from './shequ/Details';
import Register from './login/Register';
import Message from './login/Message';
import Pairing from './login/Pairing';
import Enter from './login/Enter';
import Login from './login/Login';
import Mine from './login/Mine';
import Mineinfor from './login/Mineinfor';
import Code from './login/Code';
import Set from './login/Set';
import Cus from './login/Cus';
import Goback from './login/Goback';
import Question from './login/Question';
import Privacy from './login/Privacy';
import Chancode from './login/Chancode';
import Home from './index/Home';
import My from './index/My';
import Jinian from './index/Jinian';
import Create from './index/Create';
import Riji from './index/Riji';
import Createriji from './index/Createriji';
import Punch from './index/Punch';
import Couple from './index/Couple';
import Search from './index/Search';
import Little from './index/Little';



import Photo from './index/Photo';

const routes = [
    // 登录模块
    {
        path: '/login',
        component: Login,
        pri: true,
    },
    {
        path: '/enter',
        component: Enter,
        pri: true,
    },
    {
        path: '/pairing',
        component: Pairing,
        pri: true,
    },
    {
        path: '/message',
        component: Message,
        pri: true,
    },
    {
        path: '/register',
        component: Register,
        pri: true,
    },
    {
        path: '/mine',
        component: Mine,
        pri: true,
    },
    {
        path: '/mineinfor',
        component: Mineinfor,
        pri: true,
    },
    {
        path: '/set',
        component: Set,
        pri: true,
    },
    {
        path: '/code',
        component: Code,
        pri: true,
    },
    {
        path: '/cus',
        component: Cus,
        pri: true,
    },
    {
        path: '/goback',
        component: Goback,
        pri: true,
    },
    {
        path: '/question',
        component: Question,
        pri: true,
    },
    {
        path: '/privacy',
        component: Privacy,
        pri: true,
    },
    {
        path: '/chancode',
        component: Chancode,
        pri: true,
    },

    // 首页模块
    {
        path: '/home',
        component: Home,
        pri: true,
    },
    {
        path: '/my',
        component: My,
        pri: true,
    },
    {
        path: '/jinian',
        component: Jinian,
        pri: true,
    },
    {
        path:'/photo',
        component:Photo,
        pri:true,
    },
    {
        path:'/create',
        component:Create,
        pri:true,
    },
    {
        path: '/riji',
        component: Riji,
        pri: true,
    },
    {
        path: '/createriji',
        component: Createriji,
        pri: true,
    },
    {
        path: '/punch',
        component: Punch,
        pri: true,
    },
    {
        path: '/couple',
        component: Couple,
        pri: true,
    },
    {
        path: '/search',
        component: Search,
        pri: true,
    },
    {
        path: '/little',
        component: Little,
        pri: true,
    },

    {
        path: '/Shequ',
        component: Shequ,
        pri: true,
        routes: [{
                path: '/Shequ/Tui',
                component: Tui,
            },
            {
                path: '/Shequ/Guan',
                component: Guan,
            }
        ]
    },
    {
        path: '/User',
        component: User,
        pri: true,
        routes: [{
                path: '/User/Zhong',
                component: Zhong,
            },
            {
                path: '/User/Shou',
                component: Shou,
            },
            {
                path: '/User/Xian',
                component: Xian,
            }
        ]
    },
    {
        path: '/Write',
        component: Write,
        pri: true,
    },
    {
        path: '/Details',
        component: Details,
        pri: true,
    }
]
export default routes