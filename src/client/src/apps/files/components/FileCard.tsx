import React from 'react';
import xls from '../assets/XLS.svg';
import docxIcon from '../assets/docx_icon.svg';
import pptxIcon from '../assets/pptx_icon.png';
import pdfIcon from '../assets/PDF_file_icon.svg';
import file from '../assets/File.svg';
import archive from '../assets/Archive.svg';
import pic from  '../assets/Picture_icon.svg';
import multiIcon from '../assets/music-icon.svg';

import classes from '../styles/FileCard.module.sass';

const extensions: {
	[key: string]: string;
} = {
	xls: xls,
	xlsx: xls,
	docx: docxIcon,
	doc: docxIcon,
	pptx: pptxIcon,
	pdf: pdfIcon,

	archives: archive,
	img: pic,
	multi: multiIcon,

	other: file,
};

const wordFileTypes = '.docx .xlsx .pptx .pdf'
	.split(' ')
	.map(word => word.slice(1));
const archives = '.zip .rar .7z .arj .cab .pkg .tar.gz .tgz'
	.split(' ')
	.map(word => word.slice(1));
const imgTypes = '.txt .gif .jpg .jpeg .tif .tiff'
	.split(' ')
	.map(word => word.slice(1));
const multimediaTypes = '.mp3 .wav .mov .mp4 .mpg .mpeg'
	.split(' ')
	.map(word => word.slice(1));

const getFileExtension = (filename: string): string =>
	filename.split('.')[filename.split('.').length - 1];
const getImageByExtension = (filename: string) => {
	const ext = getFileExtension(filename);
	if(archives.includes(ext))return extensions.archives;
	if(wordFileTypes.includes(ext)) return extensions[ext];
	if(imgTypes.includes(ext)) return extensions.img; 
	if(multimediaTypes.includes(ext)) return extensions.multi;
	return file;
};
const getFileName = (filename: string, showExt = false) =>
	showExt ? filename : filename.split('.').slice(0, -1).join('.');

const FileCard = ({ show, file }: { show: boolean; file: File }) => {
	const downloadFile = () => {
		const a = document.createElement('a');
		a.href = file.content;
		a.download = file.name;
		a.click();
		a.remove();
	};

	return (
		<div onClick={downloadFile} className={classes.fileCard}>
			<img
				height={100}
				width={100}
				src={getImageByExtension(file.name)}
				alt="File icon"
			/>
			<p>{getFileName(file.name, show)}</p>
		</div>
	);
};

export default FileCard;
