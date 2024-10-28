/* eslint-disable react-refresh/only-export-components */
import Faq from "../component/Faq";

const FAQ = () => {
  return (
    <section className="mb-20" id="FAQ">
      <div className="padding-x mb-20">
        <h2 className="h4 mb-3 max-w-md">
          Curiosity didn`t kill the cat it got answers
        </h2>
        <p className="font-bold text-p4">
          You`ve got questions, we`ve got answers
        </p>
      </div>
      <div className="flex flex-col lg:flex-row padding-x relative bg-s2">
        <div className="w-20 h-20 absolute -top-[40px] left-[calc(50%-40px)] flex justify-center items-center bg-black-100 p-6 rounded-full">
          <img src="../../public/images/faq-logo.svg" alt="" width={40} />
        </div>

        <div className="flex-1 pt-14 px-5 lg:border-r-2 lg:border-r-black-100">
          <Faq
            number={1}
            title="How easy is it to setup Xora?"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat recusandae cupiditate omnis, optio deleniti ea temporibus quibusdam amet debitis."
          />
          <Faq
            number={2}
            title="can integrate xora withe other platforms?"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat recusandae cupiditate omnis, optio deleniti ea temporibus quibusdam amet debitis."
          />
          <Faq
            number={3}
            title="how aften do you add new content?"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat recusandae cupiditate omnis, optio deleniti ea temporibus quibusdam amet debitis."
          />
          <Faq
            number={4}
            title="what happens when im out of storage?"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat recusandae cupiditate omnis, optio deleniti ea temporibus quibusdam amet debitis."
          />
        </div>
        <div className="flex-1 lg:pt-14 px-5">
          <Faq
            number={5}
            title="can integrate xora withe other platforms?"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat recusandae cupiditate omnis, optio deleniti ea temporibus quibusdam amet debitis."
          />
          <Faq
            number={6}
            title="how aften do you add new content?"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat recusandae cupiditate omnis, optio deleniti ea temporibus quibusdam amet debitis."
          />
          <Faq
            number={7}
            title="How easy is it to setup Xora?"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat recusandae cupiditate omnis, optio deleniti ea temporibus quibusdam amet debitis."
          />
          <Faq
            number={8}
            title="what happens when im out of storage?"
            body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat recusandae cupiditate omnis, optio deleniti ea temporibus quibusdam amet debitis."
          />
        </div>
      </div>
    </section>
  );
}

export default FAQ ;