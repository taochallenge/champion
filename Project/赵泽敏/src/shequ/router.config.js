import Shequ from './Shequ'
import Tui from './Tui'
import Guan from './Guan';
import User from './User';
import Write from './Write';
import Zhong from './Zhong';
import Shou from './Shou';
import Xian from './Xian';
const routes = [
    {
        path:'/Shequ',
        component:Shequ,
        pri:true,
        routes:[
            {
                path:'/Shequ/Tui',
                component:Tui,
            },
            {
                path:'/Shequ/Guan',
                component:Guan,
            }
        ]
    },
    {
        path:'/User',
        component:User,
        pri:true,
        routes:[
            {
                path:'/User/Zhong',
                component:Zhong,
            },
            {
                path:'/User/Shou',
                component:Shou,
            },
            {
                path:'/User/Xian',
                component:Xian,
            }
        ]
    },
    {
        path:'/Write',
        component:Write,
        pri:true,
    }
]
export default routes
