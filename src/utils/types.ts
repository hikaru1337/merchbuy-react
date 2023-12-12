export interface AlbumCover {
    Id: number;
    Title: string;
    Price: number;
    Description: string;
    Photo: string;
}

export interface AlbumCoverCart {
    Id: number;
    AlbumCover: AlbumCover;
    count: number;
}

