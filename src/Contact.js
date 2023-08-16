import styled from "styled-components";
import Footer from "./components/Footer";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div className="common-heading">

      <h2>Contact page</h2>
      </div>
      <iframe  title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44446.46117310878!2d76.60379410775967!3d13.94511591011461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb087bd9bbf3bc9%3A0xbf9692c6e15b60d9!2sHiriyur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1691341431285!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        

        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xbjvdnar" method="POST" className="contact-inputs">
              <input type="text" placeholder="username" name="username" required autoComplete="off" />
              <input type="email" name="email" placeholder="Email" autoComplete="off" required />
              <textarea name=" message" id="" cols="30" rows="10" required placeholder="Enter your message"></textarea>

              <input type="submit" value="send" />
            </form>
          </div>
        </div>
        <Footer/>
    </Wrapper>
  );
};

export default Contact;
