import user_icon from '@assets/person.png';
import email_icon from '@assets/email.png';
import password_icon from '@assets/password.png';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useEffect } from 'react';
import { FormProps } from '@interfaces/Form';
import { signupSchema, loginSchema } from '@schema/formSchema';
import { z } from 'zod';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import useTheme from '@hooks/useTheme';
const Form: FC<FormProps> = ({ isLogin, action, onHandleSetAction }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const schema = isLogin ? loginSchema : signupSchema;
  type FormData = z.infer<typeof signupSchema> | z.infer<typeof loginSchema>;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const showError = (field: keyof FormData) =>
    (touchedFields[field] || isSubmitted) && errors[field];

  const clearForm = () => {
    reset();
  };

  const onSubmit = (data: FormData) => {
    if (!isLogin) {
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Tu cuenta fue creada correctamente.',
      });
      clearForm();
      return;
    }

    const isValidUser = data.username === 'admin' && data.password === '1234';

    if (!isValidUser) {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: 'El usuario o la contraseña no son válidos',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Login exitoso',
      showConfirmButton: false,
      timer: 1500,
    });

    localStorage.setItem('auth', 'true');
    clearForm();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  useEffect(() => {
    reset();
  }, [isLogin, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <label
          className={`${
            theme === 'sunset' ? 'bg-white text-black' : 'bg-white text-black'
          }input input-bordered flex items-center gap-2 mt-6`}
        >
          <img src={user_icon} alt="" />
          <input
            {...register('username')}
            className={`${
              theme === 'sunset' ? 'bg-white text-black' : 'bg-white text-black'
            } grow`}
            placeholder="UserName"
          />
        </label>
        {showError('username') && (
          <ErrorMessage message={errors.username?.message} />
        )}

        {isLogin === false && (
          <>
            <label
              className={`${
                theme === 'sunset'
                  ? 'bg-white text-black'
                  : 'bg-white text-black'
              }input input-bordered flex items-center gap-2 mt-6`}
            >
              <img src={email_icon} alt="" />
              <input
                {...register('email')}
                className={`${
                  theme === 'sunset'
                    ? 'bg-white text-black'
                    : 'bg-white text-black'
                } grow`}
                placeholder="Email"
              />
            </label>
            {showError('email' as keyof FormData) && (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <ErrorMessage message={(errors as any)['email']?.message} />
            )}
          </>
        )}

        <label
          className={`${
            theme === 'sunset' ? 'bg-white text-black' : 'bg-white text-black'
          }input input-bordered flex items-center gap-2 mt-6`}
        >
          <img src={password_icon} alt="" />
          <input
            {...register('password')}
            className={`${
              theme === 'sunset' ? 'bg-white text-black' : 'bg-white text-black'
            } grow`}
            placeholder="Password"
          />
        </label>
        {showError('password') && (
          <ErrorMessage message={errors.password?.message} />
        )}

        <label
          className={`${
            theme === 'sunset' ? 'bg-white text-black' : 'bg-white text-black'
          }input input-bordered flex items-center gap-2 mt-6`}
        >
          <img src={password_icon} alt="" />
          <input
            {...register('confirmPassword')}
            className={`${
              theme === 'sunset' ? 'bg-white text-black' : 'bg-white text-black'
            } grow`}
            placeholder="Password Confirm"
          />
        </label>
        {showError('confirmPassword') && (
          <ErrorMessage message={errors.confirmPassword?.message} />
        )}
        {isLogin === true && (
          <p className="text-sm text-gray-700 mt-3 text-center">
            Lost Password?{' '}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Click Here
            </span>
          </p>
        )}

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className={`btn ${
              action === 'Sign Up'
                ? 'text-blue-500 hover:bg-blue-600'
                : 'bg-gray-200 '
            }   text-gray-300 border-none shadow-md w-28`}
            onClick={() => {
              onHandleSetAction('Sign Up');
            }}
          >
            Sign Up
          </button>

          <button
            type="submit"
            onClick={() => {
              onHandleSetAction('Login');
            }}
            className={`btn ${
              action === 'Login'
                ? 'text-blue-500 hover:bg-blue-600'
                : 'bg-gray-200 '
            }   text-gray-300 border-none shadow-md w-28`}
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
