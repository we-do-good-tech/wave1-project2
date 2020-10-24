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
}


export interface ReportStats {
    totalHours: string
    count: string
    limitHours: string
}
