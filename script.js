const body=document.body;
const themeToggle=document.getElementById("themeToggle");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");

if(localStorage.getItem("theme")==="light"){body.classList.add("light");themeToggle.textContent="☀"}
themeToggle.addEventListener("click",()=>{body.classList.toggle("light");const light=body.classList.contains("light");localStorage.setItem("theme",light?"light":"dark");themeToggle.textContent=light?"☀":"☾"});
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("scroll",()=>{const h=document.documentElement;document.querySelector(".progress").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";});
document.getElementById("year").textContent=new Date().getFullYear();
