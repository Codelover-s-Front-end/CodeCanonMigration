import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom'
import { LocaleContext } from './../../utils/LocaleProvider'
import 'animate.css';

function CahngeLanguage (props){

  const { changeLocale } = useContext(LocaleContext);
  const [selectedLanguage, setSelectedLanguage] = React.useState('');

  const handleLanguageChange = (event) => {
     setSelectedLanguage(event.target.value);
  };
  const navigate = useNavigate();
  const onClick = () => {
    changeLocale(selectedLanguage);
    navigate('/')
  }
  
  const onClickPrev = () => {
    navigate('/account', {state: {CurrentPage: 3}})
  }

  const langauges = [
    {
    "name":'English',
    "langId" : "en"
    },
    {
      "name":'عربى',
      "langId" : "ar"
    },
    {
      "name":'Français',
      "langId" : "fr"
    },
    {
      "name":'Española',
      "langId" : "es"
    },
    {
      "name":'Bahasa Indonesia',
      "langId" : "id"
    },
    {
      "name":'Português',
      "langId" : "pt"
    },
    {
      "name":'Türk',
      "langId" : "tk"
    },
    {
      "name":'Italiana',
      "langId" : "it"
    },
    {
      "name":'Kiswahili',
      "langId" : "sw"
    },
    {
      "name":'Deutsch',
      "langId" : "de"
    },
    {
      "name":'Română',
      "langId" : "ro"
    }
  ]

  return (
    <>  
      <div className="page  bg-black">
        <div className="header">
          <div className="flex">
            <button className="rounded-full min-w-[50px] mt-[10px] ml-0 p-[5px] bg-transparent hover:outline-none focus:bg-none focus:outline-none hover:bg-[#1d1d1d]" onClick={onClickPrev}><p className=" focus:border-none zmdi zmdi-chevron-left text-white text-4xl"></p></button>
          </div>
          <div className="page-title">
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[24px] font-normal text-white conetent-end" data-wow-duration="0.5s">
              Language
            </div>
            <div className="animate__animated animate__fadeInUp wow w-full flex text-[20px] font-normal text-[#53606b] conetent-end" data-wow-duration="0.5s">
              Preferred langauge
            </div>
          </div>
        </div>
        <div>
          <div className="absolute left-0 bottom-0 right-0 h-[calc(100vh-122.2px)] bg-tabBackground w-screen animate__animated animate__fadeInUp wow content" data-wow-duration=".8s">
            <div className="w-full p-6 pt-7">
              <p className="w-full text-left text-lg text-secondFontColor">Select Preferred Language</p>
              {langauges.map((item, index) => (
                <div key={index} className="text-left w-full py-2">
                  <label className="flex w-full">
                    <input
                      type="radio"
                      value={item.langId}
                      checked={selectedLanguage === item.langId}
                      onChange={handleLanguageChange}
                      className="h-4 w-4 mt-1 border-w-2 border-green bg-tabBackground focus:border-w-2 focus:border-green checked:text-green checked:border-2 checked:border-green checked:bg-tabBackground"
                    />
                    <p className="text-white px-5">
                      {item.name}
                    </p>
                </label>    
                </div>
              ))} 
            </div>
          </div>            
        </div>
        <div className="w-full absolute z-[1] rounded-t-lg min-h-[78px] bottom-0 m-0 overflow-hidden p-7">
          <button className="rounded-full bg-[#25cb3c] text-white m-0 text-xl w-full font-semibold uppercase h-[55px]" onClick={onClick}>
            Change Language
          </button>
        </div>
      </div>  
    </>
  )
}
export default CahngeLanguage;