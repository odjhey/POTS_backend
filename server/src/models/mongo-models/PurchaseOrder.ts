import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
	return this.toString();
};

const PurchaseOrderSchema = new Schema({
	purchaseOrderNo: {
		type: String,
		required: true,
	},
	shipmentNo: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	supplierStatusHeader: {
		type: String,
	},
	vendorAddress: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	documentDate: {
		type: String,
	},
	supplier: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	items: {
		type: [String],
		required: true,
	},
});

export default mongoose.model('PurchaseOrder', PurchaseOrderSchema);
