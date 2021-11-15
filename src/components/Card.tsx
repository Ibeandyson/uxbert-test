import React from "react";
import Link from "next/link";

interface Props {
  data: object;
}

const Card = (props: Props) => {
  const { title, id }: any = props.data;
  return (
    <div className="col-sm-12 col-md-4 px-3 py-3">
      <div className="card site_card">
        <div className="card-body">
          <h5 className="card-title">Card Info</h5>
          <p className="card-text">{title}</p>
          <Link passHref href={`View/${id}`}>
            <a className="btn btn-primary">View More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
