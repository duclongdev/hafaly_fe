import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { setCloseEmailSetting } from '../../../redux/reducers/modalSlice';
export default function ChangeEmailModal() {
  const [isInputed, setInputed] = useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("")
  const dispatch =useDispatch();
  const isOpen = useSelector((state)=>state.modal.isOpenEmailSetting)
  const handleCloseModal = () => {
    console.log("oke");
    dispatch(setCloseEmailSetting())
    
  };
  const validateEmail = () => {
    // Kiểm tra định dạng email sử dụng biểu thức chính quy (regular expression)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
  };
  const checkInput = () => {
    validateEmail();
    setError("Please enter right email address")
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center pointer-events-auto opacity-100 transform translate-z-0">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(15, 15, 15, 0.6)" }}
          ></div>
          <div className="relative z-1 shadow-xs shadow-lg rounded-md bg-white mb-0">
            <form
              style={{ position: "relative", width: "350px", padding: "24px" }}
            >
              <div className="flex flex-row justify-end mb-4 w-full">
                <div className="select-none transition duration-200 ease-in cursor-pointer flex items-center flex-shrink-0 whitespace-nowrap h-18 rounded-full text-14 leading-1.2 min-w-0 p-0 text-rgb(55, 53, 47) mt--5 mr--5 w-18 bg-rgba(227, 226, 224, 0.5) justify-center">
                  <svg
                    onClick={handleCloseModal}
                    viewBox="0 0 16 16"
                    className="closeSmall"
                    style={{
                      width: "12px",
                      height: "12px",
                      display: "block",
                      fill: "rgba(55, 53, 47, 0.45)",
                      flexShrink: 0,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <path d="M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex justify-center mb-15">
                <svg
                  viewBox="0 0 31 21"
                  className="setPassword"
                  style={{
                    width: "27px",
                    height: "27px",
                    display: "block",
                    fill: "rgba(55, 53, 47, 0.85)",
                    flexShrink: 0,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <path d="M29.4746 3.43945L30.1777 2.7168C30.5684 2.32617 30.5781 1.7793 30.1973 1.39844L29.9336 1.14453C29.6016 0.802734 29.0352 0.851562 28.6641 1.22266L27.9609 1.91602L29.4746 3.43945ZM18.2441 13.4883L20.3047 12.5996L28.7227 4.18164L27.209 2.6875L18.8008 11.0957L17.8633 13.0977C17.7656 13.3223 18.0195 13.5859 18.2441 13.4883ZM3.40039 20.0508H23.6543C25.5 20.0508 26.5254 19.0547 26.5254 17.2188V8.88867L24.5918 10.8223V17.0625C24.5918 17.8242 24.1621 18.2637 23.3906 18.2637H3.6543C2.88281 18.2637 2.45312 17.8242 2.45312 17.0625V8.91797C2.45312 8.14648 2.88281 7.7168 3.6543 7.7168H19.6504L21.4375 5.93945H3.40039C1.54492 5.93945 0.519531 6.92578 0.519531 8.77148V17.2188C0.519531 19.0547 1.54492 20.0508 3.40039 20.0508ZM6.06641 14.4453C6.85742 14.4453 7.51172 13.791 7.51172 12.9902C7.51172 12.1895 6.85742 11.5449 6.06641 11.5449C5.25586 11.5449 4.61133 12.1895 4.61133 12.9902C4.61133 13.791 5.25586 14.4453 6.06641 14.4453ZM10.373 14.4453C11.1738 14.4453 11.8184 13.791 11.8184 12.9902C11.8184 12.1895 11.1738 11.5449 10.373 11.5449C9.57227 11.5449 8.91797 12.1895 8.91797 12.9902C8.91797 13.791 9.57227 14.4453 10.373 14.4453ZM14.6797 14.4453C15.4805 14.4453 16.1348 13.791 16.1348 12.9902C16.1348 12.1895 15.4805 11.5449 14.6797 11.5449C13.8789 11.5449 13.2344 12.1895 13.2344 12.9902C13.2344 13.791 13.8789 14.4453 14.6797 14.4453Z"></path>
                </svg>
              </div>
              <div className="font-bold text-xl leading-5 text-gray-700 mb-4 px-10 text-center">
                Set a new email
              </div>
              <div className="font-normal text-xl text-gray-500 text-center mb-16 leading-5">
                Please use corect form of email which contain @ letter
              </div>
              <label className="block mb-4 text-xl text-gray-500">
                Enter a new email address
              </label>
              <Input
                placeholder="New Email" type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="block mb-4 text-xl text-gray-500 mt-4">
                Confirm your new email address
              </label>
              <Input placeholder="Confirm Email" type="email"/>
              {isValid && (
                <div
                  style={{
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "rgb(235, 87, 87)",
                    display: "inherit",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  {error}
                </div>
              )}

              <div
                role="button"
              
                onClick={checkInput}
                style={{
                  userSelect: "none",
                  transition: "background 20ms ease-in 0s",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  height: "32px",
                  borderRadius: "4px",
                  boxShadow:
                    "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px",
                  background: "rgb(35, 131, 226)",
                  color: "white",
                  fill: "white",
                  lineHeight: "1.2",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  fontSize: "14px",
                  fontWeight: 500,
                  width: "100%",
                  margin: "15px auto 0px",
                }}
              >
                Save change
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
