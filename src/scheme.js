import * as yup from 'yup';

const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{5,}$/;
// validasyon şeması
export const scheme = yup.object().shape({
    //emailin geçerli olması için gerekli koşullar

    email: yup.string().email("Email geçerli bir formatta olmalı").required("Email zorunlu bir alan"),

    //yaşın geçerli olması için gerekli koşullar

    age: yup.number().min(18, "Yaş 18'den küçük olamaz").max(100, "Yaş 100'den büyük olamaz").integer("Lütfen tam sayı giriniz").required("Yaş zorunlu bir alan"),

    //şifrenin geçerli olması için koşullar

    password: yup.string().min(5, "Şifreniz en az 5 karakterli olmalı").matches(regex, 'Şifreniz Yeterince Güçlü Değil').required('Şifre zorunlu bir alandır'),

    //şifre onay alanının geçerli olması için koşullar

    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Şifre Eşleşmiyor').required('Şifre Onayı Gereklidir')

});