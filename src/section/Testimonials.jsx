import Testi from "../component/Testi"

const Testimonials = () => {
  return (
    <section className="padding-x grid grid-cols-1 lg:grid-cols-2 mb-20">
      <div className="mb-10">
        <p className="text-p3 font-bold">wall of love</p>
        <h4 className="h4 max-w-xs">Words From our fans</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Testi
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus deserunt nesciunt beatae laborum tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus deserunt nesciunt beata"
          imgUrl="../../public/images/testimonials/alicia-barker.png"
          name="jesica Saunders"
          desc="hksd mhdaj"
        />
        <Testi
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus deserunt nesciunt beatae laborum tenetur."
          imgUrl="../../public/images/testimonials/becky-snider.png"
          name="jesica Saunders"
          desc="hksd mhdaj"
        />
        <Testi
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus deserunt nesciunt beatae laborum tenetur."
          imgUrl="../../public/images/testimonials/jessica-saunders.png"
          name="jesica Saunders"
          desc="hksd mhdaj"
        />
        <Testi
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus deserunt nesciunt beatae laborum tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          imgUrl="../../public/images/testimonials/jim-bradley.png"
          name="jesica Saunders"
          desc="hksd mhdaj"
        />
        <Testi
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minus deserunt nesciunt beatae laborum tenetur."
          imgUrl="../../public/images/testimonials/mark-erixon.png"
          name="jesica Saunders"
          desc="hksd mhdaj"
        />
      </div>
    </section>
  );
}

export default Testimonials