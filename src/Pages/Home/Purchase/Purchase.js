import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import Loading from "../Loading/Loading";

const Purchase = ({ orderQuantity, detailProduct }) => {
  const [user, loading] = useAuthState(auth);
  console.log(orderQuantity);
  console.log(detailProduct);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="purchase">
      {/* <label for="my-modal-6" className="btn modal-button">open modal</label> */}

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="flex justify-end">
            <div className="modal-action">
              <label for="my-modal-6" className="btn btn-outline mr-2 px-5">
                Cancle
              </label>
            </div>
            <div className="modal-action">
              <label for="my-modal-6" className="btn btn-outline btn-md px-5">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
