// Toast
function showToast(msg){
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(()=>{toast.remove();},3000);
}

// تسجيل الدخول
function login(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if(user==="admin" && pass==="1234"){showToast("تم تسجيل الدخول بنجاح");}
  else{showToast("خطأ في تسجيل الدخول");}
}

// إنشاء حساب
function registerAccount(){
  let user = document.getElementById("reg_user").value;
  let email = document.getElementById("reg_email").value;
  let pass = document.getElementById("reg_pass").value;
  if(user && email && pass){showToast("تم إنشاء الحساب بنجاح");}
  else{showToast("يرجى تعبئة جميع الحقول");}
}

// Modal
function openModal(id){document.getElementById(id).style.display="flex";}
function closeModal(id){document.getElementById(id).style.display="none";}

// شريط الصور المتحرك
let current=0;
function sliderNext(){
  const imgs=document.querySelectorAll(".gallery img");
  imgs.forEach((img,i)=>{img.style.display=(i===current)?"inline-block":"none";});
  current=(current+1)%imgs.length;
}
setInterval(sliderNext,3000);
window.onload=sliderNext;
