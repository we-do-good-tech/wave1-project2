export interface Report {
    studentName: string
    reportDate: string | Date
    reportStartTime: string
    reportEndTime: string
    reportRangeTimne: string
    reportActivitis: string
    reportComments: string
    isParentSign?: boolean
    parentSignImageUrl?: string
    parentEmail?: string
    ticketNo: number
    lastDateResendSignToParent: string | Date
    index?: number | string
}


export interface ReportStats {
    totalHours: string
    count: string
    limitHours: string
}
