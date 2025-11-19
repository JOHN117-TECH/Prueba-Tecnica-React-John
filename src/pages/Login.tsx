import { useState } from 'react';
import Form from '@components/Form';
const Login = () => {
  const [action, setAction] = useState<string>('Sign Up');

  const handleSetAction = (action: string) => {
    setAction(action);
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 p-4">
        <article className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-center text-3xl font-bold text-blue-600">
            {action === 'Sign Up' ? 'Sign Up' : 'Login'}
          </h2>
          <div className="flex justify-center my-2">
            <div className="h-1 w-12 text-blue-600 rounded-full"></div>
          </div>

          {action === 'Sign Up' ? (
            <>
              <Form
                isLogin={false}
                action={action}
                onHandleSetAction={handleSetAction}
              />
            </>
          ) : (
            <>
              <Form
                isLogin={true}
                action={action}
                onHandleSetAction={handleSetAction}
              />
            </>
          )}
        </article>
      </section>
    </>
  );
};

export default Login;
