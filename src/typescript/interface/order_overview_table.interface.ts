export interface PrescriptionData {
    prescription_id?: {
        id?: string;
        date?: string;
    };
    patient_details?: {
        name?: string;
        conatct?: string;
    };
    medicine_details?: {
        number?: number;
        medicine_name?: string;
    }[];
    total?: {
        amount?: string;
        paid?: boolean;
    };
    onView?:()=> void

}

export interface PendingPrescriptionData extends PrescriptionData {
    pending?: string;
    expires_in?: string;
    onCancel?: () => void;
    onAccept?: () => void;
}
export interface CollectedPrescriptionData extends PrescriptionData {
    accepted_at?: string;
    collection_schedule_at?: string;
}
export interface RejectedPrescriptionData extends PrescriptionData{
    cancelled_at?: string;
    reason?: string;
}