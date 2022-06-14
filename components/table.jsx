import Image from "next/image";
import React from "react";

const Row = ({ title, c1, c2, reference, body }) => (
  <div className="row text-ui-text">
    <div>
      {title}
      <sup>{reference}</sup>
      <span>{body}</span>
    </div>
    <div>
      {c1 && <Image src="/tabletick.svg" alt="tick" height={20} width={20} />}
    </div>
    <div>
      {c2 && <Image src="/tabletick.svg" alt="tick" height={20} width={20} />}
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
          c1: false,
          c2: true,
          reference: "1",
        },
        {
          id: 2,
          title: "Gonorrhea",
          c1: false,
          c2: true,
          reference: "2",
        },
        {
          id: 3,
          title: "Hepatitis A, B, and C",
          c1: false,
          c2: true,
          reference: "3",
        },
        {
          id: 4,
          title: "Herpes",
          c1: true,
          c2: false,
          reference: "4",
        },
        {
          id: 5,
          title: "HIV",
          c1: false,
          c2: true,
          reference: "5",
        },
        {
          id: 6,
          title: "HPV",
          c1: true,
          c2: false,
          reference: "4, 6",
          body: "(Genital warts, cervical cancer and anal cancer)",
        },
        {
          id: 7,
          title: "Syphilis",
          c1: true,
          c2: false,
          reference: "7",
        },
        {
          id: 8,
          title: "Trichomoniasis",
          c1: false,
          c2: true,
          reference: "5,8",
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
      <div className="table text-base xl:text-lg">
        <div className="header">
          <div>STIs</div>
          <div>Skin-to-Skin Contact</div>
          <div>Body Fluids</div>
        </div>
        <div className="body">{rows}</div>
      </div>
    );
  }
}

export default Table;
