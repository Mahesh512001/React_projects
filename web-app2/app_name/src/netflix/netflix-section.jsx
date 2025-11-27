import { NetflixRegister } from "./netflix-register";

export function NetflixSection() {
  return (
    <section  >
      <div className="d-flex mt-5 justify-content-center
     align-items-center text-white">
      <div className="text-center">
      <div className="fs-1 fw-bold">Unlimited movies,shows, <br/>and more</div>
      <div className="fs-4">Starts ar &#8377;149. Cancel at any time.</div>
      </div>
      </div>
      <div>
        <main>
          <NetflixRegister/> 
        </main>
      </div>

    </section>
    
  );
}