import "./index.scss";
import * as React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
  Inject
} from "@syncfusion/ej2-react-grids";
import {data} from "./data";
import { updateSampleSection } from "./sample-base";

function ColumnTemplate() {
  React.useEffect(() => {
    updateSampleSection();
  }, []);
  function gridTemplate(props) {
    var src =
      "https://ej2.syncfusion.com/react/demos/src/grid/images/" +
      props.memberID +
      ".png";
    return (
      <div className="image">
        <img src={src} alt={props.memberID} />
      </div>
    );
  }
  const template = gridTemplate;
  const toolbarOptions = ['Search'];
  return (
    <div className="Family_Management">
      <div className="control-pane">
      <div className="control-section">
        <GridComponent toolbar={toolbarOptions}  dataSource={data} width="auto" height="100%">
          <ColumnsDirective>
            <ColumnDirective
              field="memberID"
              headerText="MemberID"
              width="70"
              textAlign="Center"
            />
            <ColumnDirective
              headerText="Avatar"
              width="180"
              template={template}
              textAlign="Center"
            />
            <ColumnDirective field="name" headerText="Name" width="120" />
            <ColumnDirective field="gender" headerText="Gender" width="100" />
            <ColumnDirective
              field="birthdate"
              headerText="Date"
              width="100"
              format="dMy"
              textAlign="Center"
            />
            <ColumnDirective
              field="relationship"
              headerText="Relationship"
              width="120"
              textAlign="Center"
            />
            <ColumnDirective
              field="phone"
              headerText="Phone"
              width="120"
              textAlign="Center"
            />
            <ColumnDirective
              field="email"
              headerText="Email"
              width="120"
              textAlign="Center"
            />
            <ColumnDirective
              field="address"
              headerText="Address"
              width="120"
              textAlign="Center"
            />
          </ColumnsDirective>
          <Inject services={[Toolbar]}/>
        </GridComponent>
      </div>
    </div>
    </div>
  );
}
export default ColumnTemplate;
