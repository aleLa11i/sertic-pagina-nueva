import Swal from 'sweetalert2';
import { sendData } from './contact-form';

export const onSubmit = async ( form , setForm, t, setLoading ) => {
    const { name, email, text, phone } = form;

    if( !name.trim() || !email.trim() || !text.trim() || !phone.trim() )
    {
      Swal.fire({
        title: 'Error!',
        text: t("Contact.error"),
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      setLoading( false );
    }
    else{
        
        const res = await sendData( form )
      if( res.ok ){
          Swal.fire({
            title: 'Excelente!',
            text: t("Contact.success"),
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          setForm({
            ...form,
            name:'',
            email:'',
            text:'',
            phone:''
          })
        setLoading( false );
      }
      else
      {
        setLoading( false );
        console.log(res);
        const { errors, error, msg } = res;
        const text = errors?.email?.msg || errors?.phone?.msg || error?.msg || msg 
        console.log(text);
        Swal.fire({
          title: 'Error!',
          text,
          icon: 'error',
          confirmButtonText: 'Ok'
        })

      }
    };
};