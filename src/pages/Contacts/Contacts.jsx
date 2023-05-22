
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { data } from './data';
import { DataManager, Predicate, Query } from "@syncfusion/ej2-data";
import './Contacts.scss';
function DialogEdit() {
    const toolbarOptions = ['Add', 'Edit', 'Delete','Print', 'Search'];
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    const editparams = { params: { popupHeight: '300px' } };
    const validationRules = { required: true };
    const orderidRules = { required: true, number: true };
    const pageSettings = { pageCount: 5, pageSize: 15 };
    let contactsData = new DataManager();
    function UpdateContacts(e){
      console.log("Oke Update");
      console.log(e);
      
    }
    return (<div className='control-pane'>
      <div className='control-section'>
        <GridComponent dataSource={data} toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} pageSettings={pageSettings} actionComplete={UpdateContacts} >
          <ColumnsDirective>
          <ColumnDirective field='FullName' headerText='FullName' width='120' textAlign='Left'></ColumnDirective>
          <ColumnDirective field='PhoneNumber' headerText='PhoneNumber' validationRules={orderidRules} width='150' ></ColumnDirective>
          <ColumnDirective field='Email' headerText='Email' width='120' textAlign='Left'></ColumnDirective>
          <ColumnDirective field='DoB' headerText='Birthday' width='130'></ColumnDirective>
          <ColumnDirective field='Address' headerText='Address' width='150'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Edit]}/>
        </GridComponent>
      </div>
    </div>);
}
export default DialogEdit;