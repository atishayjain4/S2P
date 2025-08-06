import React from 'react';

const PurchaseRequisitionForm: React.FC = () => (
  <section className="w-full md:w-1/2 lg:w-3/5 bg-white p-6 rounded-lg shadow ml-0 md:ml-6 mt-6 md:mt-0">
    <h2 className="text-lg font-semibold mb-4">Create Purchase Requisition</h2>
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Requestor</label>
          <input type="text" value="Anjali Devendra Singh" readOnly className="w-full px-3 py-2 border rounded bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium">Department</label>
          <input type="text" value="Engineering" readOnly className="w-full px-3 py-2 border rounded bg-gray-100" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Item Description</label>
          <input type="text" value="Oil Drum" readOnly className="w-full px-3 py-2 border rounded bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input type="number" value={1} readOnly className="w-full px-3 py-2 border rounded bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium">Unit Price</label>
          <input type="text" value="₹ 4,200.00" readOnly className="w-full px-3 py-2 border rounded bg-gray-100" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Justification / Notes</label>
        <input type="text" placeholder="Business need or comments" className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Delivery Location</label>
          <input type="text" value="Devpraman Dutta (Manager)" readOnly className="w-full px-3 py-2 border rounded bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <input type="text" value="Draft" readOnly className="w-full px-3 py-2 border rounded bg-gray-100" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Approver</label>
        <input type="text" value="Naveen S Setty (Skip Manager)" readOnly className="w-full px-3 py-2 border rounded bg-gray-100" />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Submit</button>
      </div>
    </form>
  </section>
);

export default PurchaseRequisitionForm; 