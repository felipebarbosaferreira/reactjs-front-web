/** Sizing Scale Details
 * Class	Size	Other Notes
 * fa-xs	.75em	
 * fa-sm	.875em	
 * fa-lg	1.33em	Also applies vertical-align: -25%
 * fa-2x	2em	
 * fa-3x	3em	
 * fa-4x	4em	
 * fa-5x	5em	
 * fa-6x	6em	
 * fa-7x	7em	
 * fa-8x	8em	
 * fa-9x	9em	
 * fa-10x	10em	
 */
import {
    faStickyNote,
    faUtensils,
    faBook,
    faBell,
    faCalendar,
    faClock,
    faFilter,
    faFootballBall,
    faBriefcase,
    faMusic,
    faShoppingCart,
    faBiking,
    faDumbbell,
    faPlane,
} from '@fortawesome/free-solid-svg-icons';

const iconDefault = 1,
    iconFood = 2,
    iconStudy = 3,
    iconBell = 4,
    iconCalendar = 5,
    iconClock = 6,
    iconFilter = 7,
    iconFooteball = 8,
    iconJob = 9,
    iconParty = 10,
    iconShopping = 11,
    iconBiking = 12,
    iconDumbbell = 13,
    iconTravel = 14;

const mapIcons = new Map();
mapIcons.set(iconDefault, faStickyNote);
mapIcons.set(iconFood, faUtensils);
mapIcons.set(iconStudy, faBook);
mapIcons.set(iconBell, faBell);
mapIcons.set(iconCalendar, faCalendar);
mapIcons.set(iconClock, faClock);
mapIcons.set(iconFilter, faFilter);
mapIcons.set(iconFooteball, faFootballBall);
mapIcons.set(iconJob, faBriefcase);
mapIcons.set(iconParty, faMusic);
mapIcons.set(iconShopping, faShoppingCart);
mapIcons.set(iconBiking, faBiking);
mapIcons.set(iconDumbbell, faDumbbell);
mapIcons.set(iconTravel, faPlane);

const getIconByKey = (key) => {
    return mapIcons.get(key)
};

export default getIconByKey;