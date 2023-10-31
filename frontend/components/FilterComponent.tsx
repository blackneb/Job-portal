import React from 'react'
import { Divider } from 'antd';
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';


const FilterComponent = () => {
    const onChange = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues);
      };
  return (
    <div className='w-48 flex flex-col justify-center'>
      <p className='text-lg item-center'>Filters</p>
      <Divider />
      <div>
        <p className='text-md item-center font-semibold'>Job Type</p>
            <Checkbox.Group style={{ width: '48' }} onChange={onChange}>
                <Checkbox value="A">Permanent</Checkbox>
                <Checkbox value="A">Temporary</Checkbox>
                <Checkbox value="A">Internship</Checkbox>
            </Checkbox.Group>
      </div>
      <Divider />
      <div>
        <p className='text-md font-semibold'>Education</p>
            <Checkbox.Group style={{ width: '20px' }} onChange={onChange}>
                <Checkbox value="A">Bachelors</Checkbox>
                <Checkbox value="A">Masters</Checkbox>
                <Checkbox value="A">Phd</Checkbox>
            </Checkbox.Group>
      </div>
      <Divider />
      <div>
        <p className='text-md justify-center font-semibold'>Experience</p>
            <Checkbox.Group style={{ width: '140px' }} onChange={onChange}>
                <Checkbox value="A">No Experience</Checkbox>
                <Checkbox value="A">1 Years</Checkbox>
                <Checkbox value="A">2 Years</Checkbox>
                <Checkbox value="A">3 Years +</Checkbox>
            </Checkbox.Group>
      </div>
      <Divider />
      <div>
        <p className='text-md item-center font-semibold'>Salary range</p>
            <Checkbox.Group style={{ width: '100%'}} onChange={onChange}>
                <Checkbox value="A">$1 - $50,000</Checkbox>
                <Checkbox value="A">$50,000 - $100,000</Checkbox>
                <Checkbox value="A">$100,000 - $200,000</Checkbox>
                <Checkbox value="A">$200,000+</Checkbox>
            </Checkbox.Group>
      </div>
    </div>
  )
}

export default FilterComponent
