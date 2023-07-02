import "../assets/styles/ContactUs.css"
import NavBar from "../components/NavBar";
function ContactUs(params) {
    return (
        <>
        <NavBar/>
        <div class="contact-us">
            <h1>Created By:</h1>
            <h2>Abhishek Sevarik</h2>
            <p>Copyright Disclaimer under Section 107 of the copyright act 1976, allowance is made 
                for fair use for purposes such as criticism, comment, news reporting, scholarship, and research. 
                Fair use is a use permitted by copyright statute
                that might otherwise be infringing. Non-profit, educational or personal
                use tips the balance in favour of fair use.</p>
        </div>
        </>
    )
}
export default ContactUs;