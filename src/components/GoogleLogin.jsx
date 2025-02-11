import React from 'react';
import { doSocialLogin } from '@/app/actions';

const GoogleLogin = () => {
    return (
        <div>
            <form action={doSocialLogin}>

                <button className="bg-red-400 text-white px-3 py-2 rounded-md m-1 text-lg hover:bg-red-200" type="submit" name="action" value="google">
                    Sign In With Google
                </button>

        
        </form>
        </div>
    );
};

export default GoogleLogin;