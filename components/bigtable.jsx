import Image from "next/image";
import React from "react";

const Row = ({ title, c1, c2, c3, c4, c5, reference, body }) => (
  <div className="row">
    <div>
      {title}
      <sup>{reference}</sup>
      {!!body && (
        <span>
          <br />
          {body}
        </span>
      )}
    </div>
    <div>
      {c1 ? (
        <Image src="/tabletick.svg" alt="tick" height={20} width={20} />
      ) : null}
    </div>
    <div>
      {c2 ? (
        <Image src="/tabletick.svg" alt="tick" height={20} width={20} />
      ) : null}
    </div>
    <div>
      {c3 ? (
        <Image src="/tabletick.svg" alt="tick" height={20} width={20} />
      ) : null}
    </div>
    <div>
      {c4 ? (
        <Image src="/tabletick.svg" alt="tick" height={20} width={20} />
      ) : null}
    </div>
    <div>
      {c5 ? (
        <Image src="/tabletick.svg" alt="tick" height={20} width={20} />
      ) : null}
    </div>
  </div>
);

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Chlamydia",
          c2: true,
          c3: true,
        },
        {
          id: 2,
          title: "Gonorrhea",
          c3: true,
          c2: true,
        },
        {
          id: 4,
          title: "Herpes",
          c3: true,
          c4: true,
        },
        {
          id: 5,
          title: "HIV",
          c4: true,
          c5: true,
        },
        {
          id: 6,
          title: "HPV",
          c1: true,
          body: "(Genital warts, cervical cancer and anal cancer)",
        },
        {
          id: 7,
          title: "Syphilis",
          c4: true,
        },
        {
          id: 8,
          title: "Trichomoniasis",
          c1: false,
          c3: true,
        },
      ],
    };
  }

  //   Chlamydia1 Gonorrhea2 Hepatitis A, B, and C3 Herpes4 HIV5 HPV4,6 Syphilis7 Trichomoniasis5,8

  render() {
    const rows = this.state.data.map((rowData) => (
      <Row {...rowData} key={rowData.id} />
    ));

    return (
      <div className="table">
        <div className="header">
          <div>STIs</div>
          <div>Visual Examination</div>
          <div>Urine Sample</div>
          <div>Cotton Swab</div>
          <div>Blood Draw or Finger Pick</div>
          <div>Oral Fluid Sample</div>
        </div>
        <div className="body">{rows}</div>
      </div>
    );
  }
}

export default Table;
