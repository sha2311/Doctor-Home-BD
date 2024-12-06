import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
// --------------------------------------------------
import kurshid from './kurshid.png'
import drMale from './drMlae.png'
import drFoysal from './DrFoysal.png'
import drKhurshida from './drKhurshida.png'
import drShilaSEN from './drShilaSEN.png'
import drTahmina from './drTahmina.png'
import drhashibur from './drhashibur.png'
import drasimkumar from './drasimkumar.png'
import drswapan from './drswapan.png'
import drnuzrulislam from './drnuzrulislam.png'
import drazizulislam from './drazizulislam.png'
import drjalal from './drjalal.png'
import drNurul from './drNurul.png'
import drkamrunzamman from './drkamrunzamman.png'
import drmohiuddin from './drmohiuddin.png'
import drAmit from './drAmit.png'






export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    // ---------------------------------
    kurshid,
    drMale,
    drFoysal,
    drKhurshida,
    drShilaSEN,
    drhashibur,
    drasimkumar,
    drswapan,
    drnuzrulislam,
    drazizulislam,
    drjalal,
    drkamrunzamman,
    drmohiuddin,
    drAmit

}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Khurshed Alam',
        image: kurshid,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '7 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Khurshida Jahan',
        image: drKhurshida,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Khurshida Jahan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Khurshida Jahan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Hasibur Rahman',
        image: drhashibur,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '10 Years',
        about: 'Prof. Dr. Hasibur Rahman has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Prof. Dr. Hasibur Rahman has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc4',
        name: ' Dr. Nazrul Islam',
        image: drnuzrulislam,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '9 Years',
        about: 'Prof. Dr. Md. Nazrul Islam has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Prof. Dr. Md. Nazrul Islam has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Md. Jalal Uddin',
        image: drjalal, 
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Prof. Dr. Md. Jalal Uddin has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Prof. Dr. Md. Jalal Uddin has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Nurul Alam Bashar',
        image: drNurul, 
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Nurul Alam Bashar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Nurul Alam Bashar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Amit Hasan',
        image: drAmit,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Amit Hasan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Amit Hasan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Shila Sen',
        image: drShilaSEN,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Prof. Dr. Shila Sen has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Prof. Dr. Shila Sen has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Asim Kumar Nandi',
        image: drasimkumar,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Asim Kumar Nandi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Asim Kumar Nandi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Md. Azizul Haque',
        image: drazizulislam,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Prof. Dr. Md. Azizul Haque has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Prof. Dr. Md. Azizul Haque has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Kamruzzaman Swapan',
        image: drkamrunzamman, 
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kamruzzaman Swapan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Kamruzzaman Swapan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Md. Mohiuddin Khan',
        image: drmohiuddin,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Md. Mohiuddin Khan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Md. Mohiuddin Khan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Foysal Ahmed',
        image: drFoysal,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Foysal Ahmed has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Foysal Ahmed has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Tahmina Sharmin',
        image: drTahmina,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Tahmina Sharmin has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Tahmina Sharmin has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Swapan Kumar Sen',
        image: drswapan,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Swapan Kumar Sen has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Swapan Kumar Sen has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Charpara, Mymensingh',
            line2: 'Circle, Ring Road, Bangladesh'
        }
    },
]