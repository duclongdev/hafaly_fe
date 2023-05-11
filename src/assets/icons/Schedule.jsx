import React from "react";

const Schedule = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "20px",
        height: "20px",
        marginRight: "10px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        dataName="Layer 1"
        viewBox="0 0 32 32"
        id="schedule"
      >
        <rect
          width="27"
          height="28"
          x="2.5"
          y="3.5"
          fill="#d9d8da"
          rx="2"
          ry="2"
        ></rect>
        <rect width="3" height="3" x="5.5" y="13.5" fill="#57565d"></rect>
        <rect width="3" height="3" x="5.5" y="19.5" fill="#57565d"></rect>
        <rect width="3" height="3" x="5.5" y="25.5" fill="#57565d"></rect>
        <rect width="3" height="3" x="17.5" y="13.5" fill="#57565d"></rect>
        <rect width="3" height="3" x="17.5" y="19.5" fill="#57565d"></rect>
        <rect width="3" height="3" x="11.5" y="19.5" fill="#57565d"></rect>
        <rect width="3" height="3" x="11.5" y="25.5" fill="#57565d"></rect>
        <rect width="3" height="3" x="17.5" y="25.5" fill="#57565d"></rect>
        <rect width="3" height="3" x="23.5" y="13.5" fill="#57565d"></rect>
        <rect width="3" height="3" x="23.5" y="19.5" fill="#57565d"></rect>
        <path
          fill="#55bb8c"
          d="M12.45 16.929h-.031A.5.5 0 0 1 12 16.653l-1-2a.5.5 0 1 1 .895-.447l.615 1.229 1.522-2.283a.5.5 0 1 1 .832.555l-2 3A.5.5 0 0 1 12.45 16.929zM24.45 28.929h-.031A.5.5 0 0 1 24 28.653l-1-2a.5.5 0 1 1 .895-.447l.615 1.229 1.522-2.283a.5.5 0 1 1 .832.555l-2 3A.5.5 0 0 1 24.45 28.929z"
        ></path>
        <path
          fill="#ed456a"
          d="M29.5,5.5v5H2.5v-5a2.006,2.006,0,0,1,2-2h23A2.006,2.006,0,0,1,29.5,5.5Z"
        ></path>
        <rect
          width="3"
          height="6"
          x="5.5"
          y=".5"
          fill="#57565d"
          rx="1.5"
          ry="1.5"
        ></rect>
        <rect
          width="3"
          height="6"
          x="23.5"
          y=".5"
          fill="#57565d"
          rx="1.5"
          ry="1.5"
        ></rect>
      </svg>
    </div>
  );
};

export default Schedule;
